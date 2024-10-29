export const ArrowRight: React.FC<React.ComponentPropsWithoutRef<"svg">> = ({
  ...rest
}) => (
  <svg
    {...rest}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask id="a" fill="#fff">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.095 11.25h14.5v1.5h-14.5v-1.5Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m11.845 3.94 8.06 8.06-8.06 8.06-1.06-1.06 7-7-7-7 1.06-1.06Z"
      />
    </mask>
    <path
      d="M4.095 11.25v-1a1 1 0 0 0-1 1h1Zm14.5 0h1a1 1 0 0 0-1-1v1Zm0 1.5v1a1 1 0 0 0 1-1h-1Zm-14.5 0h-1a1 1 0 0 0 1 1v-1Zm7.75-8.81.707-.708-.707-.707-.707.707.707.707Zm8.06 8.06.708.707.707-.707-.707-.707-.707.707Zm-8.06 8.06-.707.708.707.707.707-.707-.707-.707ZM10.785 19l-.708-.707L9.37 19l.707.707.707-.707Zm7-7 .706.707.707-.707-.707-.707-.707.707Zm-7-7-.708-.707L9.37 5l.707.707.707-.707Zm8.81 7.75v-1.5h-2v1.5h2Zm-16.5-1.5v1.5h2v-1.5h-2Zm15.5-1h-14.5v2h14.5v-2Zm-14.5 3.5h14.5v-2h-14.5v2Zm5.982 5.957 1.06 1.06 1.415-1.413-1.06-1.061-1.415 1.414Zm1.06-16.475-1.06 1.06 1.414 1.415 1.06-1.06-1.413-1.415Zm9.476 8.06-8.061-8.06-1.414 1.414 8.06 8.061 1.415-1.414Zm-8.061 9.476 8.06-8.06-1.414-1.415-8.06 8.06 1.414 1.415Zm4.525-9.475-7 7 1.414 1.414 7-7-1.414-1.414Zm-7-5.586 7 7 1.414-1.414-7-7-1.414 1.414Z"
      fill="currentColor"
      mask="url(#a)"
    />
  </svg>
);
