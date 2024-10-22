// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

import { PropsWithChildren } from "react";

export function LaunchPreference(props: PropsWithChildren): JSX.Element {

  // Ask the user in which environment they want to open this session.
  // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
  return <>{props.children}</>;
}
