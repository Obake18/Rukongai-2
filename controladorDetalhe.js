const params = URLSearchParams(window.location.search)
const idCaso = params.get('id');

desenharCardDetlhe('cardDetlhe', registro, idCaso);
