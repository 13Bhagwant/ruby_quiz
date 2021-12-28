function findAdmin(list, lang) {
    return list.filter(function(dev) {
      return dev.githubAdmin === 'yes' && lang === dev.language;
    })
  }