// 821347165768116
// ycCLm_FsengcQR1ksrovQDY0aSU

const url = 'https://api.cloudinary.com/v1_1/deog7l2eq/image/upload';


const uploadImage = async (formData) => {
   let response = await fetch(url, {
      method: 'POST',
      body: formData,
    })

    let responseJson = await response.json()

    console.log(responseJson, "Response ")

    let {secure_url} = responseJson

    return secure_url
}

export {uploadImage}