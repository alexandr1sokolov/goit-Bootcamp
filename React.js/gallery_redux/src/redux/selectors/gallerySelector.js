export const gallery =state=>state.gallery;
export const galleryLength = state => gallery(state).length;
export const galleryAuthors = state => gallery(state).map(el=>el.user);