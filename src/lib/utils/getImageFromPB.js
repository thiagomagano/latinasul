const PBUrl = import.meta.env.PUBLIC_PB_API;

export default function getUrlImagesFromPB(
  collection,
  id,
  fileName,
  thumb = false
) {
  if (thumb) {
    return `${PBUrl}/api/files/${collection}/${id}/${fileName}?thumb=320x240`;
  }

  return `${PBUrl}/api/files/${collection}/${id}/${fileName}`;
}
