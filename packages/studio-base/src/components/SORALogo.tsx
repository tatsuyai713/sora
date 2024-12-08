// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

import { SvgIcon, SvgIconProps } from "@mui/material";

export function SORALogo(props: SvgIconProps): JSX.Element {
  return (
    <SvgIcon viewBox="-20 -20 100 100" {...props}>
      <title>SORA</title>
      <g fill="#FFFFFF">
        <path d="M14.5,68.5H0L27.2,0h12.1L67,68.5H52.5l-5-13.4H19.4L14.5,68.5z M33.3,15.2L23,44.1h20.8L33.3,15.2z"/>
      </g>
    </SvgIcon>
  );
}