// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

import { SvgIcon, SvgIconProps } from "@mui/material";

export default function SORALogoText(props: SvgIconProps): JSX.Element {
  return (
    <SvgIcon viewBox="0 0 400 68.5" {...props}>
      <title>SORA</title>
      <g fill="#4D4D4D">
        <path d="M14.5,68.5H0L27.2,0h12.1L67,68.5H52.5l-5-13.4H19.4L14.5,68.5z M33.3,15.2L23,44.1h20.8L33.3,15.2z"/>
        <path d="M84,0h38.5v11.6H97.8V28h21.5v11.1H97.8v29.4H84V0z"/>
        <path d="M147.4,0h40.5v11.6h-26.7V28h23.6v11.1h-23.6v17.8h26.7v11.6h-40.5V0z"/>
        <path d="M214.9,0h40.5v11.6h-26.7V28h23.6v11.1h-23.6v17.8h26.7v11.6h-40.5V0z"/>
        <path d="M282.5,0h13.8v56.9h26l-4.7,11.6h-35L282.5,0L282.5,0z"/>
        <path d="M347.5,68.5H333L360.2,0h12.1L400,68.5h-14.6l-5-13.4h-28.1L347.5,68.5z M366.3,15.2L356,44.1h20.8L366.3,15.2z"/>
      </g>
    </SvgIcon>
  );
}