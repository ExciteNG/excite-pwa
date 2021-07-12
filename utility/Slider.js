// import '../assets/index.less';
// import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import React from "react";

import Slider, { SliderTooltip } from "rc-slider";

const { Handle } = Slider;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <SliderTooltip
      prefixCls="rc-slider-tooltip"
      overlay={`${value} months`}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </SliderTooltip>
  );
};

const wrapperStyle = {};

export default ({ loanDurationHandler, val }) => {
  //   useEffect(() => {
  //     console.log(a);
  //   });
  return (
    <div>
      <div style={wrapperStyle}>
        <Slider
          min={3}
          defaultValue={3}
          value={val}
          marks={{ 3: 3, 9: 9, 12: 12, 24: 24 }}
          step={null}
          handle={handle}
          max={24}
          onChange={(e) => loanDurationHandler(e)}
        />
      </div>
    </div>
  );
};
