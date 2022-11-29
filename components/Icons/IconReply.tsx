import React from "react";
import { theme } from "../../styles/theme";
import { IconProps } from "./types";

const IconReply = ({
  fill = theme.colors.light_grey,
  size = 16,
  ...rest
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 2C2.11634 2 1.4 2.71634 1.4 3.6L1.39995 9.50007C1.39995 10.3837 2.1163 11.1001 2.99995 11.1001H3.89459V13.0035C3.89459 13.6063 4.63909 13.89 5.04027 13.4402L7.12739 11.1001H11C11.8836 11.1001 12.6 10.3837 12.6 9.50007L12.6 3.6C12.6 2.71634 11.8837 2 11 2H3ZM2.6 3.6C2.6 3.37909 2.77909 3.2 3 3.2H11C11.2209 3.2 11.4 3.37909 11.4 3.6L11.4 9.50007C11.4 9.72099 11.2209 9.90007 11 9.90007H6.90512C6.70446 9.90007 6.51333 9.98571 6.37977 10.1355L5.09459 11.5765V10.604C5.09459 10.2152 4.77942 9.90007 4.39064 9.90007H2.99995C2.77904 9.90007 2.59995 9.72099 2.59995 9.50007L2.6 3.6ZM13.9999 7.00005C13.9999 6.72391 14.2238 6.50005 14.4999 6.50005C14.7761 6.50005 14.9999 6.72391 14.9999 7.00005V12.1919C14.9999 13.0204 14.3284 13.6919 13.4999 13.6919H12.466V15.2304C12.466 15.7569 11.8393 16.0313 11.4524 15.6743L9.30446 13.6919H7.97969C7.70354 13.6919 7.47969 13.4681 7.47969 13.1919C7.47969 12.9158 7.70354 12.6919 7.97969 12.6919H9.45929C9.6111 12.6919 9.75733 12.7491 9.86889 12.8521L11.466 14.326V13.2959C11.466 12.9623 11.7364 12.6919 12.0699 12.6919H13.4999C13.7761 12.6919 13.9999 12.4681 13.9999 12.1919V7.00005Z"
      fill={fill}
    />
  </svg>
);

export default IconReply;
