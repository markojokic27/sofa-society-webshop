export const Bag: React.FC<React.ComponentPropsWithoutRef<'svg'>> = ({
  ...rest
}) => (
  <svg
    {...rest}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path stroke="currentcolor" d="M4.5 7.5h15v12h-15z" />
    <path d="M9 8s0-4 3-4 3 4 3 4" stroke="currentcolor" />
  </svg>
);

