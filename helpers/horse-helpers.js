const dataCleaning = ({ name, birthdate, breeder, owner, father, mother, sex, pictures }) => {
  let result = {valid : true, horse : {}}
  if(!name){ 
    result.valid = false;
    result.errorMessage = "Merci de saisir le nom du cheval"
  } else {
    result.horse.name = name;
  }

  return result
}

module.exports = {dataCleaning}