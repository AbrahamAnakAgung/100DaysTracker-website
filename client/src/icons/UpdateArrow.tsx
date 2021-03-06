import * as React from "react";

function SvgUpdateArrow(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox='0 0 14.155 14.155' width={50} height={50} {...props}>
            <title>Restart</title>
            <path
                d='M12.083 1.887A7.054 7.054 0 009.356.19v2.135c.48.239.935.55 1.334.95a5.118 5.118 0 010 7.229 5.123 5.123 0 01-7.229 0 5.121 5.121 0 010-7.229c.005-.006.021-.016.028-.025h.002l1.181 1.179L4.665.685.923.68l1.176 1.176a.118.118 0 01-.027.031 7.078 7.078 0 1010.011 0z'
            />
        </svg>
    );
}

export default SvgUpdateArrow;
