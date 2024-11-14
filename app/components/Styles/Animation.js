// ****************************************/
// Animations
// ****************************************/

import { css } from "styled-components";

const fadeOut = css`
  @keyframes fade-out {
    to {
      opacity: 0;
    }
  }
`;

const fadeIn = css`
  @keyframes fade-in {
    from {
      opacity: 0;
    }
  }
`;

const scaleFadeout = css`
  @keyframes scaleFadeout {
    0% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.85);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(1.2);
    }
  }
`;

const pulseRing = css`
  @keyframes pulse-ring {
    from {
      transform: scale(0.33);
    }
    80%,
    100% {
      opacity: 0;
    }
  }
`;

const gradient = css`
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const slideFromRight = css`
  @keyframes slide-from-right {
    from {
      transform: translateX(30px);
    }
  }
`;

const slideToLeft = css`
  @keyframes slide-to-left {
    from {
      transform: translateX(-30px);
    }
  }
`;

const animation = {
	fadeIn,
	fadeOut,
	slideFromRight,
	slideToLeft,
	scaleFadeout,
	pulseRing,
	gradient
};

export default animation;
