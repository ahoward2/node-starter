export const downloadPath = ({
  path,
  name,
}: {
  path: string;
  name: string;
}) => {
  return `/api/app-getter?path=${path}&name=${name}`;
};
