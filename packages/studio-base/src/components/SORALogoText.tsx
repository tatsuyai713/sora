// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

import { SvgIcon, SvgIconProps } from "@mui/material";

export default function SORALogoText(props: SvgIconProps): JSX.Element {
  return (
    <SvgIcon viewBox="0 0 400 68.5" {...props}>
      <title>SORA</title>
      <g fill="#4D4D4D">
        <path d="M10,80 C10,50 50,50 50,20 C50,-10 10,-10 10,20 L10,50 C10,80 50,80 50,110 C50,140 10,140 10,110 Z" />
        <path d="M100,50 C100,20 130,20 130,50 C130,80 100,80 100,50 Z" />
        <path d="M160,50 C160,20 190,20 190,50 C190,80 160,80 160,50 Z M190,80 L210,100 L180,100 Z" />
        <path d="M240,110 L260,50 L280,110 Z M250,90 L270,90 Z" />
      </g>
    </SvgIcon>
  );
}