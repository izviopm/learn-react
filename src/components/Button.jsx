/* eslint-disable react/prop-types */
import clsx from 'clsx';

export default function Button(props) {
  const { type = 'submit', className = 'bg-black', children, text } = props;
  return (
    <button
      {...props}
      type={type}
      className={clsx(
        className,
        '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 font-medium whitespace-nowrap inline-flex justify-center items-center gap-x-2 text-sm text-white px-4 h-10 rounded-lg'
      )}>
      {text || children}
    </button>
  );
}
