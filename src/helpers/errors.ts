const error_message_helper = ($q: any, error: any) => {
    if(error.response){
        $q.notify({
          message: error.response.data.errors[0].message,
          type: "negative",
        });
      }else{
        $q.notify({
          message: error.message,
          type: "negative",
        });
      }
};

export  { error_message_helper };