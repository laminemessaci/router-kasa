import {
  PropertyAdvertisement,
  PropertyAdvertisementsList,
} from '../model/index.js';

export const fetchAdvertisements = async () => {
  try {
    const response = await fetch('/advertisements.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const data = await response.json();
    // console.log(data.data);

    return data.data;
  } catch (e) {
    console.error('Something went wrong: ', e);
    window.alert('Something went wrong: ', e);
  }
};

/**
 * Get data and reformat it
 */
export const getAdvertisements = async () => {
  const response = await fetchAdvertisements();
  if (response) {
    const advertisementInstances = [];

    for (let advertisement of response) {
      const advertisementInstance = new PropertyAdvertisement(
        advertisement.id,
        advertisement.title,
        advertisement.cover,
        advertisement.pictures,
        advertisement.description,
        advertisement.host,
        advertisement.rating,
        advertisement.location,
        advertisement.equipments,
        advertisement.tags
      );

      advertisementInstances.push(advertisementInstance);
    }

    return new PropertyAdvertisementsList(advertisementInstances);
  } else {
    const message = `Oups ! Une erreur s'est produite.\n\nHTTP-Error-${response.status} while fetching ${this._dataSource}`;

    window.alert(message);
  }
};
