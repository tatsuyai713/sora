// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

import { SvgIcon, SvgIconProps } from "@mui/material";

export default function SORALogoText(props: SvgIconProps): JSX.Element {
  return (
    <SvgIcon viewBox="0 0 400 68.5" {...props}>
      <title>SORA</title>
      <g fill="#4D4D4D">
        <path d="M10,90 L40,10 ...Z" /> <!-- S -->
        <path d="M60,90 L90,10 ...Z" /> <!-- O -->
        <path d="M110,90 L140,10 ...Z" /> <!-- R -->
        <path d="M160,90 L190,10 ...Z" /> <!-- A -->
      </g>
    </SvgIcon>
  );
}