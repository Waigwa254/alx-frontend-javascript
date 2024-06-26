import getFullResponseFromAPI from './1-promise';

const success = true; // Change this to false to see the rejection handling

getFullResponseFromAPI(success)
  .then(response => {
	      console.log(response);
	    })
  .catch(error => {
	      console.error(error);
	    });

