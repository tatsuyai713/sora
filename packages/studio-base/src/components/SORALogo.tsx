// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

import { SvgIcon, SvgIconProps } from "@mui/material";

export function SORALogo(props: SvgIconProps): JSX.Element {
  return (
    <SvgIcon viewBox="-20 -20 100 100" {...props}>
      <title>SORA</title>
      <g fill="#FFFFFF">
        <path d="M10,90 L40,10 ...Z" /> <!-- S -->
      </g>
    </SvgIcon>
  );
}