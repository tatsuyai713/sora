// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

import { SvgIcon, SvgIconProps } from "@mui/material";

export function SORALogo(props: SvgIconProps): JSX.Element {
  return (
    <SvgIcon viewBox="-20 -20 100 100" {...props}>
      <title>SORA</title>
      <g fill="#FFFFFF">
        <path d="M10,80 C10,50 50,50 50,20 C50,-10 10,-10 10,20 L10,50 C10,80 50,80 50,110 C50,140 10,140 10,110 Z" />
      </g>
    </SvgIcon>
  );
}