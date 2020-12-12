import RevolverCover from './RevolverCover.jpg';

export const initialAlbum = {
    image: RevolverCover,
    releaseYear: 1966,
    name: "The Beatles",
    album: "Revolver",
    used: false
  };

export const getSettings = () => {  
  let settings = JSON.parse(localStorage.getItem('settings'));

  if (!settings) {
    settings = {
      image: RevolverCover,
      releaseYear: 1966,
      name: "The Beatles",
      album: "Revolver",
      used: false,
      count: 0,
      showSurprise: false
    };
    localStorage.setItem('settings', JSON.stringify(settings));
  }

  return settings;
}

export const saveSettings = async (state) => {
  const { album, image, releaseYear, name, used, count, showSurprise } = state;

  let settings = getSettings();

  if (image) {
    settings.image = image
  }

  if (album) {
    settings.album = album
  }

  if (releaseYear) {
    settings.releaseYear = releaseYear
  }

  if (name) {
    settings.name = name
  }

  if (used) {
    settings.used = used
  }

  if (count) {
    settings.count = count
  }

  if (showSurprise !== null) {
    settings.showSurprise = showSurprise;
  }

  localStorage.setItem('settings', JSON.stringify(settings));

  state.settings = settings;
};
