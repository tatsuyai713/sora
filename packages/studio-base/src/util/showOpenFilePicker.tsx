// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

/**
 * A wrapper around window.showOpenFilePicker that returns an empty array instead of throwing when
 * the user cancels the file picker.
 */
export default async function showOpenFilePicker(
  options?: OpenFilePickerOptions,
): Promise<FileSystemFileHandle[]> {
  if (typeof window.showOpenFilePicker !== 'function') {
    return new Promise<FileSystemFileHandle[]>((resolve) => {
      const input = document.createElement('input');
      input.type = 'file';
      input.multiple = options?.multiple || false;
      input.accept = options?.types?.map((type) => {
        const acceptList = Object.keys(type.accept).flatMap((mimeType) => type.accept[mimeType]);
        return acceptList.join(", ");
      }).join(", ") || "";

      input.onchange = async () => {
        const files = Array.from(input.files || []);

        if (files.length === 0) {
          resolve([]);
          return;
        }

        const fileHandles = files.map((file) => {
          const handle: FileSystemFileHandle = {
            getFile: async () => file,
            name: file.name,
            kind: "file",
            createWritable: async () => { throw new Error("Not supported"); },
            createSyncAccessHandle: async () => { throw new Error("Not supported"); },
            isFile: true,
            isDirectory: false,
            queryPermission: async () => "granted",
            requestPermission: async () => "granted",
            isSameEntry: async (otherHandle: FileSystemFileHandle) => {
              return otherHandle.name === file.name;
            },
          };
          return handle;
        });

        resolve(fileHandles);
      };

      input.click();
    });
  }

  try {
    return await window.showOpenFilePicker(options);
  } catch (err) {
    if (err.name === "AbortError") {
      return [];
    }
    throw err;
  }
}
