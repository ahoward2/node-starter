import axios from "axios";

export const download = async ({
  owner,
  repo,
  ref,
}: {
  owner: string;
  repo: string;
  ref: string;
}) => {
  return await axios
    .get(`https://api.github.com/repos/${owner}/${repo}/zipball/${ref}`)
    .then(() => console.log("Finished downloading"))
    .catch((e) => console.error(e));
};
