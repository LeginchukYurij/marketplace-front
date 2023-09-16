//
// App paths
//

const pathPublic: { [k: string]: string } = {
  home: "/",
  productDetails: "/product/:idOrSlug",
};

const pathPrivat: { [k: string]: string } = {
  accountSettings: "/account-settings",
};

export const paths: { [k: string]: string } = { ...pathPublic, ...pathPrivat };

//
// Check if pathname mathes to one of given key from paths argument
//

export const checkPathMatch = (
  pathName: string,
  path: { [k: string]: string }
) => {
  let isMatch = false;

  const allPath = Object.values(paths);
  const pathFirstSection = pathName.split("/")[1];

  allPath.forEach((p) => {
    if (p.slice(1) === pathFirstSection) isMatch = true;
  });

  return isMatch;
};
