const {
  getCorporations,
  getSpeakers,
  getTalks,
} = require('./apiSelectors')

describe('API selectors', () => {
  describe('Corporations selector', () => {
    const zenika = { id: 'zenika' }
    const lucca = { id: 'lucca' }
    const surMesure = { id: 'surMesure' }
    const laFourchette = { id: 'laFourchette' }

    it('should get venues and sponsors', () => {
      const meetups = [
        { venue: surMesure, sponsor: zenika },
        { venue: laFourchette, sponsor: lucca },
      ]

      expect(getCorporations(meetups)).toEqual([
        surMesure,
        zenika,
        laFourchette,
        lucca,
      ])
    })

    it('should get unique venues and sponsors', () => {
      const meetups = [
        { venue: surMesure, sponsor: zenika },
        { venue: laFourchette, sponsor: zenika },
      ]

      expect(getCorporations(meetups)).toEqual([
        surMesure,
        zenika,
        laFourchette,
      ])
    })

    it('should not get empty venues and sponsors', () => {
      const meetups = [
        { venue: surMesure, sponsor: {} },
        { sponsor: zenika },
        {},
      ]

      expect(getCorporations(meetups)).toEqual([
        surMesure,
        zenika,
      ])
    })
  })

  describe('Speakers selector', () => {
    const michel = { id: 'Michel' }
    const jackie = { id: 'Jackie' }
    const john = { id: 'John' }

    it('should get speakers', () => {
      const talks = [
        { speakers: [michel] },
        { speakers: [jackie, john] },
      ]

      expect(getSpeakers(talks)).toEqual([
        michel,
        jackie,
        john,
      ])
    })

    it('should get unique speakers', () => {
      const talks = [
        { speakers: [michel, jackie] },
        { speakers: [jackie, john] },
      ]

      expect(getSpeakers(talks)).toEqual([
        michel,
        jackie,
        john,
      ])
    })

    it('should not get empty speakers', () => {
      const talks = [
        { speakers: [michel] },
        { speakers: [] },
        {},
      ]

      expect(getSpeakers(talks)).toEqual([michel])
    })
  })

  describe('Talks selector', () => {
    const parcel = { id: 'parcel' }
    const immutadot = { id: 'immutadot' }
    const googleHome = { id: 'googleHome' }

    it('should get talks', () => {
      const meetups = [
        { talks: [parcel] },
        { talks: [immutadot, googleHome] },
      ]

      expect(getTalks(meetups)).toEqual([
        parcel,
        immutadot,
        googleHome,
      ])
    })

    it('should get unique talks', () => {
      const meetups = [
        { talks: [parcel] },
        { talks: [parcel, googleHome] },
      ]

      expect(getTalks(meetups)).toEqual([
        parcel,
        googleHome,
      ])
    })

    it('should not get empty talks', () => {
      const meetups = [
        { talks: [parcel] },
        { talks: [] },
        {},
      ]

      expect(getTalks(meetups)).toEqual([parcel])
    })
  })
})
