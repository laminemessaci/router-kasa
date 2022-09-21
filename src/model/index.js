export class PropertyAdvertisement {
  /**
   * @constructs
   * @param {string} id
   * @param {string} title
   * @param {string} cover
   * @param {Array.string} pictures
   * @param {string} description
   * @param {Object} host
   * @param {string} rating
   * @param {string} location
   * @param {Array.string} equipments
   * @param {Array.string} tags
   */
  constructor(
    id,
    title,
    cover,
    pictures,
    description,
    host,
    rating,
    location,
    equipments,
    tags
  ) {
    this.id = id;
    this.title = title;
    this.cover = cover;
    this.pictures = pictures;
    this.description = description;
    this.host = host;
    this.rating = rating;
    this.location = location;
    this.equipments = equipments;
    this.tags = tags;
  }
}

export class PropertyAdvertisementsList {
  /**
   * @constructs
   * @param {Array.PropertyAdvertisement} advertisements
   */
  constructor(advertisements) {
    this.advertisements = advertisements;
    console.log(this.advertisements[2]);
  }

  /**
   *
   * @param {number} id
   * @returns {PropertyAdvertisementsList | null } advertisement
   */
  findById(id) {
    const advertisementsAssociatedToId = this.advertisements.find(
      (adv) => adv.id === id
    );

    return advertisementsAssociatedToId;
  }
}
