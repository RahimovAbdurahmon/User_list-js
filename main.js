let body = document.querySelector("body")
let table = document.querySelector(".table");
let btnLaight = document.querySelector(".btnLaight")
let btnDark = document.querySelector(".btnDark")
let selStatus = document.querySelector(".selStatus")
let selCourse = document.querySelector(".selCourse")
let inpSearch = document.querySelector(".inpSearch")
let dialogAdd = document.querySelector(".dialogAdd");
let btnAddDialog = document.querySelector(".btnAddDialog");
let closeDialogAdd = document.querySelector(".closeDialogAdd");
let inpAddImg = document.querySelector(".inpAddImg");
let inpAddName = document.querySelector(".inpAddName");
let inpAddPhone = document.querySelector(".inpAddPhone");
let selAddCourse = document.querySelector(".selAddCourse");
let selAddStatus = document.querySelector(".selAddStatus");
let btnAdd = document.querySelector(".btnAdd");
let btnCancelAddDialog = document.querySelector(".btnCancelAddDialog");
let dialogAll = document.querySelector(".dialogAll")
let btnInfoDialog = document.querySelector(".btnInfoDialog")
let btnEditDialog = document.querySelector(".btnEditDialog")
let btnDeleteDialog = document.querySelector(".btnDeleteDialog")
let dialogDelete = document.querySelector(".dialogDelete")
let btnCancelDeleteDialog = document.querySelector(".btnCancelDeleteDialog")
let btnDelete = document.querySelector(".btnDelete")
let dialogInfo = document.querySelector(".dialogInfo")
let btnCloseDialogInfo = document.querySelector(".btnCloseDialogInfo")
let imgInfo = document.querySelector(".imgInfo")
let nameInfo = document.querySelector(".nameInfo")
let courseInfo = document.querySelector(".courseInfo")
let statusInfo = document.querySelector(".statusInfo")
let phoneInfo = document.querySelector(".phoneInfo")
let btnEditDialogInfo = document.querySelector(".btnEditDialogInfo")
let btnDeleteDialogInfo = document.querySelector(".btnDeleteDialogInfo")
let dialogEdit = document.querySelector(".dialogEdit")
let closeDialogEdit = document.querySelector(".closeDialogEdit")
let inpEditImg = document.querySelector(".inpEditImg")
let inpEditName = document.querySelector(".inpEditName")
let selEditCourse = document.querySelector(".selEditCourse")
let selEditStatus = document.querySelector(".selEditStatus")
let inpEditPhone = document.querySelector(".inpEditPhone")
let btnEdit = document.querySelector(".btnEdit")
let btnCancelEditDialog = document.querySelector(".btnCancelEditDialog")
let divTitle = document.querySelector(".divTitle")

let data = [
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZCldKgmO2Hs0UGk6nRClAjATKoF9x2liYYA&usqp=CAU",
    name: "Rahim Abdurahmon",
    course: "Java script",
    phone: "888888 0090",
    isComplete: true,
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr3qBVX4XIA8zq3LpBn64zAuOt9_IZ7_H5uA&usqp=CAU",
    name: "Islom Saidaliev",
    course: "React",
    phone: "888888 0090",
    isComplete: false,
  },
  {
    id: 3,
    img: "data:image/jpeg;base64,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",
    name: "Muhamad Nastullo",
    course: "Java script",
    phone: "888888 0090",
    isComplete: true,
  },
  {
    id: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxVjkW3bVLn363bZkS82anw_JP32sHd1SIuQ&usqp=CAU",
    name: "Surush Qalandar",
    course: "Java script",
    phone: "888888 0090",
    isComplete: true,
  },
  {
    id: 5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2fU6VWMdDDAYhNv6NQiHuGeXP3KKtPwVHew&usqp=CAU",
    name: "Amir Saidaliev",
    course: "React",
    phone: "888888 0090",
    isComplete: true,
  },
  {
    id: 6,
    img: "data:image/jpeg;base64,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",
    name: "Khoja Shohdidor",
    course: "Java script",
    phone: "888888 0090",
    isComplete: false,
  },
  {
    id: 7,
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBgVFRUZGBgaGiIdGhobGhkbHhsdHBoaGxsjGhobIC0kHSIpHhobJTclKS4wNDQ0GyM5PzkxPi0yNDABCwsLEA8QHRISHjIpIykyMjIyMDIyMjIyMjIyMjAyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAQAAxQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAQMEBQYAB//EAEEQAAIBAgQDBAgEBQMDBAMAAAECEQADBBIhMQVBUSJhcYEGEzKRobHR8EJSweEVI2JykgcU8YKisjNTY8IWJCX/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAKhEAAgIBAwMDAwUBAAAAAAAAAAECEQMhMVISE5EiQaEEFFEyQmGBwXH/2gAMAwEAAhEDEQA/APOgKJRXBaUVyGws1ItYJ2AbRVOxZlWfCTrUetAhLKGt/lUSMhy5VIKHN7IzQZ5ihDKS7ZZGysII+/OhqbxN0JUIQQJ22AJ0A7pzEdxFQ4pAJFLEeNFt40NAHUdi1mJGu06fCaRELGB/wOZNPOwXsrvzaTv3fLzO9ADV/KBlXXWS2nTYRypg0ZFJloACKRu6iNIaYHWcOzmFEnc7AAdSToBRX8I6DMYK7ZlYMJ6Ejap/CmBVlgE5lbLp21E6CdDBIaOcU5i3yowuNLlSNcoJELEhejyROoAPWqRBSGgNGaSKAG450haiagNMAWFS3tJb1MseSkDpBzDx90c9qQWxbGZ/a/CswQd5P37+Ua4xOp/47h0HdTAaJoDRmkcUABp411dXVQi3pa6iArE0Cy/f1pIpQaUjpSASjIj72/euGnjSClYCRShaUClNIA/WQuUaGfaB8fPn960xRiuyUAIqzpSYgZQwXtMsSJmJ7hqTtp3+dXvoxwdsRcygQv4iRoF/ET38h4+NaPGehVoyVuOHAhSQpAjaNJFaKluVHHKWx5biUuxJDRzyqdD0MgEUxhbhHPyJ38O+t83+nzs2Y3Vk+1Ej/momP9Abir2LiN3Ga064jeGRlreJBgERP3FPEVH4jZdew6wymIGaCZGu8T7vqWDfMkncaHvpSit0Y63THgv31ptqMmhapAA0dp8pzROm3TaDt9+40kU2TTAR3J1Jn9O4d1Ng04RQnTx+X70AIwj72/emmo5oIpgBXUe3Q/fKuqgLYUooaMVgWKKMGPGuA99CKTAKKUClRSdtdJ8qU91IDjQxS0oFIBAKWeXKuJoTTA9W9DMELWDRwO1c7RPcNviTVmgBqqx2CNuzatgPKW0X+WwVlIUZiOvanSonCOIt6t3dni2NTcWD00I3p2duNemi7umNKiYhRpWWfj91iXF5EtjmyGddufP7FKnpCzQnZcHZ0286loq1sZz0wtK99mEafPn8qz2DQ9qd5rVcewk3FZRqd4qtxPDnVEIXUyTBG3Lv3Dj/AKa1U0o6nLPG23SK011SXwrj2lIPfHxppMNcYkKjMdzAJjvMbUKSMnCS9iOaBqdZCDBBB6RSFCORn5fvTsXSxuY8flQMKIqelBNMQMUjGjeOXn+3dTRpiYNdXV1MC3FOKaCKJaxLFFOWkLEADmPDekS0xJEajcHSPGaee4FGRDI5tqJ3jQ7aGkwDvX9wvMySBH7j/nrTAoRRCkAoFKTSE0lIB2xaLsqDcmK1nonwBLl1LhDlEcHMSkMQC69jfLoDvtFZPDXijq41g7deR+Fel+j95LeHwsT22ZtYEAsbayRvCrAptpI0xx6pV/0teMYxEHaktMBRqSeQUczNVnGb6G2LWdMzavB0gb/DT305xLDObrXEGdkU5VzFdSeoBIkabbT1qqxeFt3ras9u2X/EHW6pQzBhgraTPaMAgTSjGzutJIseFJYu2/5cZVJVlB9lhuJ3g7+BoMdktqVRQobQxpPKqb0avsrvbt2siaGAANSYnT9YMA09xJ3JJjRSKlrUTOw2Dtuzo/aIRwusalDHnMVQlRhbKW2aXEvBBBXPpHgMp79Qau+DmLsn2iYA7jpM8684u8VzFhcJDSRO5EaAd9aKDlGkY9xRdsl4nHFjqaZDGG10DAR/Vrv4QR/zVZcYgwe4+IO1PHFEZh1Ynwkz79KpYqB5bJucDx+/jTZflVf/ALo0tu6WYACSdKXbYdRpMFgFyhnZtQGjMqhVJIXMzczBgDpT78Jt+sQEdhmCmQMy6idQddGBBB1mpWDssttfWIylVAnKCCFnIYJEESRzHWmMTiA1t4XspAGuo0AGvgkeJNZt0y1G1qd6feiBwFxGtlnsXB2WaJVxqytAHKCPPpWQNez+l4N7gCXG1ZPVsCdT7YtzP9rGvGGrqZ5zVOhJjauoa6mBbExXofAOA2rVq3imS+75QwGRxkeCZUAagDm0gxtyrFcH4h6i6twW0dlHZD6qD1jqBMbQYPKK9J4Vxx8XZJBysT2lQqYg6kKRMeydf3rhzzlFWk6/g6MEYylT+R66ouKLgt23z5lLsqMzKMwiTqRPKZ0586fjOCsuQUsW1bKTAEryhsluCyzuQTGum9SuIKwzCHZjrCwV5EHJuuvLTfpQ27V+2A72yRv7Sr7agQRIC6QCQdPKuSGSUveztlhVUqIWN4fgmRf5T22HtNbW52VQgMYYGZk9ojprvUT/APG7DXFCXLmSAzEhAY6Ajn3xA8iKfxvF7iMjIrq+XtBnzamdGysM0RoJiCYmixPGlUq0IwZYdTbDMAzDN7IWSYzRy231rbqkqV/6KGCM26WyKK/wNiz+pYOiH2j2ZG+k6NA3I08KjvwbEKVDWnl/ZESTGh0B035xWu4ddQBr3rHTNIRAsJvLTIJkSVIOusDWpePa4WZLZV2IE27ikKV7Ps5juMoOq5pAnrVLJJbnOsKlrsZC36O3CCzsltV3zNmIOwH8uZM6RvWnGLS2li2SCyWQsaAQCSXY/hBJMD9yGhw5nuLmuLkDHRQNzzAD6AAHUzoeWlMY3h3aLoyujwSQfbCk6CdNMsQIAgeevcx16i1ilF3HUueE8Sm4JOlwaHUSdx7xqDTuN4ZaZiZaDuodgPgaxyYr1l12tsoJKnI0ghVGVgQPZgkd8+dR+J4u4QV9e9snXKwB9zc61cNdBRyUi9x/HLGEIt2gJJ7USTrpqdyaqsdxnNC8t/oayJVUaS5Zu/51zYwFup6CSaOhE9xmv4fjAjG652Gh6nYffdVJg/Ry5jrxa0kLJzOTlWd4nm0EaCdxQYLCXLxRPYR3Cy28sY25b/Ot+vo6bVoJYxDB1Mqr6ISYkHLqJIBnWKf6dRKp6GO456GYlTnCg5VGxBCBRqAB2jz/AA1k8Tw28klrbR1AkfDbzr1zC8RxakW7tsgz7RKkc/YYH7ioPpVaazcTIuU3swcjkbZUNlPLMHQ92sRVQyWTOHTseRTNSsNeyspX2gQZ8On3rWyv4SxiCVKAQINxTDEjeCdCo/qmeorK8U4S9ggyHtkwrqCAT0YHVWjWD5EjWttGY20zWJ6Qtct5LhzaQOvv8ars/wDLcdY+E1XYAgx1pzE3YBA2rjkvUd8X6T1v0uXJ6Ogf/HY/7rlpj868PNe4+nr/AP8ABWOaYf8A8kP6V4fFdTPNe7BAJ2FdSE11AFtPKnLN1kYMjMjDZlJUjwI1FMg0QrEsuML6RYpGLeud5jMLhLgxtIb9NatLPpioH82xOkFkg7mfZeconoays/f1pyxdyMrQDlIMHUGDMEcxWMsEJO2tfD+DWGaUdmba3xbB4o5XftkDKGBSSBzU9k95zT0jepov3LaqFtlgDlDApkYEgyYPTTYxHhQcU4JhrZe7asz61BCiIUOJOUHRRB3EbDz8/S7esu2QskclYx13UxNZP6elUX/TOzHlTdtWbXEYxVClLbO2pgK4C9okgE7LEa+6jxPEHLhAmdzIQoWAORskZpJgFZ56kieQxbek2JtxDBgToGWOk6qQYq3wnpS7ombD25DkhwWGmhkTJGsk6mc3dS7OVLZP+yZZMfVu1+S5v3lE5kKuCROW2TngR2tDljmeXPSnbWJa2Ldy4gYFNRJVgVbs5FSMzbTmgdgRvWbxXpO+UtbtW7ZJgGC5yjpPdHXeq3D8ZunNqGKnP6wk5wyweywIAE6RHPwFaQ+mk9JaLyyZ5oJenf4HHxoa6xJgK7sYkakyY100HxqcmI/lKHIcsZCOc2+0lpKgamf6T3VQn+WhuPGcmcpG868tBrpGkRUJ77EgnNJ/XU/CB5d9d3TpRx9WpobOGtsrXCltQvdcfMZhYzOACT3dTUpMKVVVWFd+SKqAL10E6nQa9T31D4feFwgGAidpu7T9F+Jq3UmC2z3DCj8iAQY8FMDvY0mUtR/g6TiEzdtQwWIBzuQY74zR5KSa1mEx1m5cuLbZ2CEAgrkykqGPZcZgJJHlpWNS56q4GQ5Vs6k/1AdqPKEFWDeljKgdrckiNMsmBJ3ispqzSDS9ywx13NdCB9FHIbE9/OpvGrJxGFCSBcB7Dk6ZgoEE8syzr1HdWNw3pKjSToWJJq2wPFgzFZ0MadOlQriaSqRl79lrbCyQVI9sHTvAPdz86n4XHhwyGPVgQ0gEOP6wdxvA5HatPxHh6YlMrkK4EJc6CZyv1U9dxOnMHFYu01m4bNxcpQ6g/iO885WIjfTXWtoSUkYSi4kTjHCjaBuWZNmdZ9pJ2DdV6HyMHesS7mHf862XC8eWfIwAGRpU6bDnyZSBEmfMaVVcb9HxauesSVsvsTrkaCShEz0I30PODTkkOE/Y9A9Nrs8Bw8/iXD/IN+leOOa9d/1DfLwTBqd2a0PdZdv0FeQNVM55bg11LlrqALIGiBoSa4Gsmig5rY+jvBTeuLbXsoArXLgVCYK5iZcHT8IAG9Zbh2BuXriWraku5gRr4nwAk+Ar2Th3DkwdlbKnM343OsnkB/SPvpUuSirKhBydDPGkUCVGVQuUAaAAaCOmkad1eZ8bx1s/y0ESdSxAEzuTyA61tuPn1gKZyo5nu5xXnuOXDLdAAi2oIY7F9Np5A7T30oepnTP0IZGEsjK7XQwI0gMFgE5jLAEmdIA6eFRsbj11C89APyoOUd/1ruJub0ZFVUByoAIgLJ0A7yT51DXBQX55Z940+ZrpVI5G2xh8SZJnbQffjrUi0fVqGaCx1yyZiefTrPKCN9nrWFVVU6FifZmDzAPUHnP2Id20SzMTtz8NBFPQKY3dxBc6mZP3py50IfM2pMb/AH5Cj/2h06nUju20+NODD5FzHdjA7hzMdY+dGgtSx4dcyoBsXOg7hr8TA8q1SYogZJIhcp18z72rHYBS11Qdlj4do1bXHOs86louLL/DuHzMYMuBDCQJlicp0J007zQ4xldc5XVASCwVSugeDkgEMDtuNKosPi2QmIIO6kSD4ilxONZlYSAI0AEDUgnxOg9wpUFk3htuxeuNbukTceLb7EPBIAb8p9mOZy1bL6NG20hmMVg72OYZAigMJOaOfXXYivUPR7jYxWHW4fbXs3B/UOfgd/PurPJB7mmOdug8K4UZTUniPC7WMti3cOVgP5d0CSnQN+ZZ5cpMc5i4i3Otdhr5UwTpWKbTtGzSa1MLj+F4jBXct45AuqOPZdSfwNGveOU6xNW2F4laxltrJIVyNQBoSsZLiA7d69JHMGtwMYl1Dbu21uWzujCR4jofCsjx/wD07BBvYBmOXX1RPbWNf5bbt4HXoSdK6YzjLQ5pQlHUuf8AV24BgMCqmVLAgjmFtQP/ACryI1d8V47ev4ezYvQfUNcyuPxZwpysORBVjy0bbTWjY1b3MgSaWhrqBFpRAUCiizVkM9Y/0v4cqYV8UwGe4zIh/LbTRo8XBn+0VI4vxMJmmononjo4ZZA/C1xT3H1jN/4sKqLrm4/b9gH31jk1dHZhVRsg47GubbOxIX4nwrFBfXXMp0UAsfAcv0q+9J8cD2F0A5cqp+C2CxY8jCg98j9Dt41riVKyMrt0WtrBkZAAIX2oIgTlI84B0obPDWZYYENcM68lBkk/fI9Ket4ZBqoAmGk/hX8x7zsBrp5TItFpgnssWa5O4SZGY+E6c47xWhFEI8Nntz/SnVyNZjlvPu5mhHDAvYJ0TtXD0jl4ifeQKtlxOguRDHs21/KBqSesTJPMkdKJrSkrZXfQ3CeZ3APh7RosKKG4mQZ8sO5hR+VQNfcNPM1DawWuAHkBI8dT8K0UWyWuH2EEKOoB082aojuqoT2i7mNFEAnVjJPIaU7JaKzAJqzRvMef7Cn2Rht5zS4h4C21RvzEmBPJRz050Be4XIVQANILHkJMwN6YCEnmP2pm9c7JjpXJibuUtlUjxPM+HdUfG3HIAKlV/pAO3nNBLZHe5DADbKJ79asfRjjH+2uyT2HIVu4SYP8A0k+4mqlsuf2untAj300F0Oojx7/jTaTVMlOnaPa83OouJINZ30Q4zntC057VsQO9NlPlt5DrVtjLvSuSUadHZGVqxUuFDoZq2wPESCCDBFZstzG1S8HdBI61JZnvTO2tvFm4qgLd1cRIGY9vs8+0Cw6GKzOPtZLjIYlcsxqJyKWjzmtN6cntJP5TJ8x+9ZbEHWT+VdNtkUSfdXVB3FWcWRJSdDMdTFdQFq6qMy0zV1BNEprMo3nobi1GBvJPaF/NHc9tFHxRvdTGOx4VNaymBxptsSNQwhlmJG48CDqP3NBibzOYkxyG5++6s5RtnTDIlGhjHYk3H7iYHdJitlY4OLNuGPsqCI55hpB6kz4ZieQl70f9HLFq2uJvBnbtMiMAAAp0bL12ifzA8qb4nxMl9dco9Y3exGg8AIH/AFVsloQ3bsr8QACZ2TV+9o0UdwkDxJ6VHLNAXdrhlvAGAPAtHktA7nKi82OYnrrA/wC4k0JvQzuPwghe7KMo851p0KyQt7+Yz7rbEDwX6tTK3yLbMT2nMT3tq3w+dRy0WwvNmA8hqfjUnEYG52Bl1ALFZXNr/TM7UUFiYl+wiD8RzHvC6D9aaxL9pUH4V18Wpm683I5AKv1oEfNcY/1f+NFCsfDZrx6Age7embDTnbU+2f01oMI+rN3saHDvCNH5T86YrBZwLZGuuXlvzobzjsf9VOMwNvloVp04YEIxIA7XIjboeuv3FAFfftKWJiRp5aVWvEbEfGrXEMfWMwQKByHcN47+nzqtcaDxppkNDmCxbWnV0Oo8RI5g1sRxRbiBlOnTmD0rDZeZ2+dP4e4ynMDA59PClOCkPHNxZqrePIOtSsLxEK29VNnC3Wti5lhCcoclVBMTAzEE+Qp3AcIxVy76u3YZm0mRCgHYlj2QPOuboZ1Ka/JZ+liLct27sgDtIZ5xkYR1MZtO6sXirxdix3PwgQB5AAeVXPpP6y1dbCuwb1Jg5ZILFQWIJ31MeVUD10QVKjlyS6pNo6updOfwrqozLCuFITXVmWFNWvCMGGu2rbe1cuKsSQVGaGJHhVdZcJJiZGk8jyJqy9F7p/3tgmW7YHMnUEe4TPgKANl6RYvRgNBCKB0H/qQPAQPKsdjLslz1cDyB+i1a8fxXbYHqje5ch9xmqC+0Zv758iT8e0KpGjY/ni5/ao8oXN8zUYN/L/uIH6mhL9p+9dP8aAv2U/u/+tMVk7CXlW7aLaAST3FpAPkYNWrhlftaKABJCgFgp7SvuWL5SNdpms5eftj+0fPlQK/8xv7qAJVy8GvOy7G4xH38ajYZ9z4mm8M+p86S08KR3GgmwrDwh/tNcrRbPgPnTav2D4USnsHy8+7xoCyRZSUltFkSdpiJAPXWlxOIkKBooJgSfeff7qZxmIzLA7K5h2Z026bUxcb2fE0DJDEFtR7SiflTX+2QiZiDB7+Xz+dIx1B7tvPlQes1bz+YoAR8Fqe0THQcjER76t+HcHmCwJj2Qec6H4/KuwLqTqPwfEEn9BWgN9bYDE66lR1JOmnm3uobBRO4hezPbS1qtpFUFFVijas4g+zm7Gp/KZitV6CXFi48jW5lERA7ILARyzzp399eacO4Pcu3IEMzazBPaJma2uG4Vi8FZsobTkeuz3HVWKquZN5AIEKZMRrWcpVqka9OlMwPpVfz47FP1vvHgHZR8AKp2p+/cLMznUuS3mxkz361HatTlErqEmup0BZE0Q0oAYrprOigs/OvSfR3BWcDhvW3VzYm6ubKd7aGCi9zEQzeIH4awXBcOty/bRhKZszjqiAu481QjzrWOWu3Ge5cUEySzEBQzbDzYgQNaynJqkt2dP0+NO5S2RA9JmzP6xFMOpbbYGQ3mCD5zWabEAaNpIg6EbbH76Vu+NOyWktEBiqopgaEgCcxA7ILCf2isniMUGMerQEk5j7QjkBBiN62jtqZSq9CsOJEgzyg/fmRQ+tAUqDOUz4gftTrqSCQqNBiSIJ1IAFAQcxHqlJA2B9nnqee3WqIBe8JXpET0jWmvXds685p31MqP5aiTuWPSeW1ODDLOXKoEDm2siZP0oDUhpfAkePnXJf7Md1PepElsgI3gNy84pjKoBzKw7/lVCFF0ZT5Ur3uzHftTJZY2M8v1oWZdIB99KgskvekDrM/ffXM/s/c1GJG8aeO9cWzeP39/epQdRJNyW8AKHNIJ6n5mo4bnTqsBBPuoodlrhHyAuQSBA09/wCsU7YvXLtwc3YwByEnYVUWxJq54auQ5zpl1J6dfhNYzfsdGOHuejtxWxwrDSgDXWG+mZzGoUn2VB5+esgHHt6c4lnzPdvBWBDohTLqNYJSSIJ7JM6+2KzvFeItfuG4x7lXkq8tPv4VsL3C7f8ADVvqihv9swJgTnW4kNPWGYTV7aGbVq2ZnheGw903wVZcti5cSCQM9tC6yGJ6ERJ3NUBp0Xn1AZtRB1Oo6U0TGg8z9KtGL/gTTuNdQ11MROmuBoZp3DWyzBRufh1rOiiXw92ttnXkCDy0YQRPXXyocXxCTtJ5TsPAde+lx94J/LX8O5nY76fWjscMBALZixAOVcvZDezmZyBJ/KNaagrv3L62l03oN4LizpKMMyHXLOitrDAeeo5+NTcwIGT+YkSwWARzid4EbRVTi8L6tonMp2MQdDBBHIg6Gm7dxknKSJEEciO+qaJUibexynLlAWNxzk6jf3UKXGZmE+1J94of4gXIzAaCI3G8yR/zTdzEtlYAKOpiCQD4bd1Kh2PMQqqDqTr7tNfpSSSz+fyqMWMqTrvUjDv23JAiCNe/QeHj39SKAsbGHcpOoWQJjnv9igu2LggZoB2E9K7EY9iuVeyoiBtMbEjr9yaYZw0asTOw/SqJtB3MwIDZTHXLzokWZYqkDxA9+1BlUEQoJ5iSY8Tt86VyJliJ5AbL4CgBCOcKO7tafCmyg2zL5Bv1FTsHhvWSZIUEDQZmZjsqjr8qPG8NCqWUtoJKtlkgEAlWQkGCRI3E0AQVtqfxrPLcA+Mjf5/MfUEkBTmLHYedAADz99KjsjBlMEGQQdRQJFxY4eyRmEE9aLiV7LbCrudT5x8gv/dQrxK5ccKzFmMDUDSdNdfCqrE3ix56e+efy+FYKD6rZ1yyR6aR1qa9BfEn+DlAJJXYdCw5D70rz+0JIjc+79q13FcaEweRIBIXUCI7Q2G42+9hOZPqjX5RH7GY1jpp5/SmqUmkrpOY6upQ0V1AEv51Ow59WnrCO0w7PcOvnUXC2sxJb2V1P6Dz/Q0mKvl2J3qUikRrrljVwMbbdRnOUwMwKlgSFKZkggSQdm0BA86lu7fn3+FADVATeJYz1hELAE89dY/RV85qGrnbfxrlPh56UVyI2I6/XwoECzKdKIXWE7EHTXwio5HnSp15UCsnYZAwBbRQdTpB02nl+kjqATvYxWIAYhABA1Hj9/M61DNyQB+GdtNN+e/M+802yjrRQ7JPrEE9ksDMcvs0z60kRsvQaTHXrQL37dOvhRRz36ffKgV2KNo5d31pQKEtRL3+X791AyfwzGKgKtIGYMrRmysAQZWRIKkjTWjv41AjJbEyN8uVRIVdASSeyDJOpJnlVZlilWgKByg1xXL4/L96kqo578u7xpUTr9/fxoCiRwdAL9ljt6xSfAEMJ/XwqPxKz/8AsXUUTFxwPAMakYRQHQTpB18z+gNW3A/R+7irvZYIzk9tgShYnNBIGhnn1HWJlySZcYOS0KYXBbGVDLGJb9O493d4Q9xG7NpV8J9xNaXiPofh7Fqbl5xeE6Lke2xEwVIg5TG58PDI49tgOX6Vm6cka7QZAAmkPdThPTz7/wBu77DVbHKdXUoFdTAnO8W1A3Ykny7I+R99Ri0aD30V1uyoHKQffP6n3UzSKCDUY18aaUURPIf80AEzcgf3oNeXwpSJ8fn+9AB7qBWKv2aRmmuZp8KE0xCgxR5Rvy+/uaFV5nb50uYz+ndQAm+tFNdHTafdS7anyH1oGcBH6ClmgmuJpAOBvvpRez4/Km5jx+X71yt1/wCKB2PI1SbZIjn0+lQ1GoHXnU60OR5bnw6e6D4UmNGg4dwBvU/7q7pbV0VRIm4GuBLmUAyFGY68zMHSvRMZ6S4LCIbVpQVH4RqCe9dvMzXkrYjRR60ZIEoWbTKdRERMifOhvWbgktGjZScyntASdjO3PbUVlK/Y3go7WT+N8Xe+5MwJkD751ncXclo5fOnb1z3fOohM+Pz/AHqscK1JzT0pDYNKorlWuJ91anOKW6bUtBXUAONtQqKKgnlSGHmG3x6+NCBrHPpFJlqTh8PPaOiqRM7x3RvsfdQAq4JtS3YA5nryG/xqOzT9/etPYnEF+UDpPPnqaY16x5/SmAOU0YSN/d1o1MDU6fOm2aTPuoAscLwe7c1FtiO4Gpj8HuKP/TYeRqXwfjt97iIbrgE669AT+lX1r0mvQDMyuYKUXLqrPlzHtZsqntbSKxdvc6o9KWiMPfUIRmTfltUJzJkVbek+Pe7iGLkHL2RAjQEnUDnrrVLWkVSOecrYtOTG+/Tp+9NgxSVRArCnreGZoIUkHbblvQWkLEKOdS7l7IuRYnWWBnfeNOgGveRQA1dGQlZB6n5iPvyqdhQrBVLZQ8KWInKJyyRz/aq6ygPjyFSdt+X6VEvwa40t2GmHQ6EtPOFEDzmhvXFVAiOW1J15aDbx/So9y5Og2+fjTRppfkUpJvQQmhNaTB2FRFhZYojEhVZiXLQBn7KqMup76gcXsAZXUAZugygjKrKwXkYaCOo76ozK12n738e+grq6gBQCa6umuoA238BsfkP+TfWkPALH5D/k31rQYbGhLbJ6tWLT2jGxAy6FdcrAMNY1OmxEh+JWpJGHQcwOyQDlVR+DUCCYOhLGZ0j2e1Hivg+fWadfrfyZhPR6wSAEJJMAZjqTtzp7E8Ctg5HRhl/DmOk68jV//E0BYrZVcwO2TQwmUr2OyAUJgfnMEQCHH4shaTh7Z7ROsE6oRBJXtdo5tZ6CIBB2o8V8D78+bMqeAWPyH/JvrXfwDD/kP+TfWtTh+JWlCj/bK2X8xQzBPtH1cmdJM7gbLKmHjsStxgy21SFghQACZYzAAA0IHlTWKN/pXwJ551pN/JRHgFj8h95+td/AMP8AkPvP1q0rqrsw4rwR9xl5PyV1rgtlSGVWBBkEM2h99SmwlvXsgEzJGm+/hPPrT9dR2cfFeAX1OVfufkrH4HYJJKkkmScx1J350n8Aw/5D/kfrVpXUdmHFeA+5y8n5Kv8AgGH/ACH3n6138Aw/5D7z9atK6jsw4rwH3GXk/JXW+DWVByqRIg9ptQY7+6g/gNj8h/yb61aV1HZhxXgf3GXk/JVjgNgfgP8Ak31ojwOyfwn/ACb61ZV1HZx8V4D7nLVdT8lafR+ztkb/ACNKfR2z/wC23vatBc4xdZw5ImANtCFZXHPqorv4vc11XUzsdJDjTX+tj4mo7MeKL78uTKdeFoFCerJAkANmJAO46xPKmr3B7bmWVm3I7TecAeA8gOlXq8XuAjUaEmNY1ZW67DKAB0EU1a4hcWMpggEAxrr489N6fajxQu/Lkyg/gWH/ACn/ACP1pTwDD/kP+TfWtOvGrk7JEyRl0O3I8tBtSHjV0xomgAHYGwIOvUGNj89aXajxQd+XNmZ/gOH/ACH/ACP1rqtSZ1POuq+zDivBH3GXk/J//9k=",
    name: "Saidamir Sharip",
    course: "React",
    phone: "888888 0090",
    isComplete: false,
  },
  {
    id: 8,
    img: "i.png",
    name: "Umedjon Sadridin",
    course: "Java script",
    phone: "888888 0090",
    isComplete: false,
  },
];

///Select
/// Select Status
selStatus.onclick = () => {
  if (selStatus.value == "Active") {
    let data2 = data.filter((elem) => {
      return elem.isComplete == true
    })
    get(data2)
  }
  else if (selStatus.value == "Inactive") {
    let data2 = data.filter((elem) => {
      return elem.isComplete == false
    })
    get(data2)
  }
  else {
    let data2 = data.filter((elem) => {
      return elem
    })
    get(data2)
  }
}
///SelectCourse
selCourse.onclick = () => {
  if (selCourse.value == "Js") {
    let data2 = data.filter((elem) => {
      return elem.course == "Java script"
    })
    get(data2)
  }
  else if (selCourse.value == "Jsx") {
    let data2 = data.filter((elem) => {
      return elem.course == "React"
    })
    get(data2)
  }
  else {
    let data2 = data.filter((elem) => {
      return elem
    })
    get(data2)
  }
}



/// Add
btnCancelAddDialog.onclick = () => {
  dialogAdd.close();
  inpAddImg.value = "";
  inpAddName.value = "";
  inpAddPhone.value = "";
};
closeDialogAdd.onclick = () => {
  dialogAdd.close();
  inpAddImg.value = "";
  inpAddName.value = "";
  inpAddPhone.value = "";
};
btnAddDialog.onclick = () => {
    dialogAdd.showModal();
};
btnAdd.onclick = () => {
  let newUser = {
    id: data.length + 1,
    img: inpAddImg.value,
    name: inpAddName.value,
    course: selAddCourse.value,
    phone: inpAddPhone.value,
    isComplete: selAddStatus.value == "Active" ? true : selAddStatus.value == "Inactive" ? false : "",
  };
  data.push(newUser);
  get(data);
  dialogAdd.close();    
  inpAddImg.value = "";
  inpAddName.value = "";
  inpAddPhone.value = "";
  console.log(newUser);
};

//// Delete
btnCancelDeleteDialog.onclick = () => {
  dialogDelete.close()
}
function deleteUser(id) {
  dialogDelete.showModal()
  btnDelete.onclick = () => {
    data = data.filter((elem) => elem.id != id)
    get(data)
    dialogAll.close()
    dialogDelete.close()
  }
}


///////info
btnCloseDialogInfo.onclick = () => {
  dialogInfo.close()
  dialogAll.close()
}
function InfoUser(id) {
  dialogInfo.showModal()
  let user = data.find((elem) => elem.id == id)
  imgInfo.src = user.img
  nameInfo.innerHTML = user.name
  courseInfo.innerHTML = user.course
  statusInfo.innerHTML = user.isComplete == true ? "Active" : "Inactive"
  phoneInfo.innerHTML = user.phone
  btnDeleteDialogInfo.onclick = () =>{
    data = data.filter((elem) => elem.id != id)
    get(data)
    dialogInfo.close()
    dialogAll.close()
  }
  let idx
  btnEditDialogInfo.onclick = () => {
    dialogEdit.showModal()
    let user = data.find((elem) => elem.id == id)
    inpEditImg.value = user.img
    inpEditName.value = user.name
    selEditCourse.value = user.course
    selEditStatus.value = user.isComplete == true ? "Active" : "Inactive"
    inpEditPhone.value = user.phone
    idx = id
  }
  btnEdit.onclick = () => {
    data = data.map((elem) => {
      if (elem.id == idx) {
        elem.img = inpEditImg.value
        elem.name = inpEditName.value
        elem.course = selEditCourse.value
        elem.phone = inpEditPhone.value
        elem.isComplete = selEditStatus.value == "Active" ? true : false
      }
      return elem
    })
    get(data)
    dialogEdit.close()
    dialogAll.close()
    dialogInfo.close()
  }
}


///// Edit
closeDialogEdit.onclick = () => {
  dialogEdit.close()
}
btnCancelEditDialog.onclick = () => {
  dialogEdit.close()
}
let idx
function EditUser(id) {
  dialogEdit.showModal()
  let user = data.find((elem) => elem.id == id)
  inpEditImg.value = user.img
  inpEditName.value = user.name
  selEditCourse.value = user.course
  selEditStatus.value = user.isComplete == true ? "Active" : "Inactive"
  inpEditPhone.value = user.phone
  idx = id
}
btnEdit.onclick = () => {
  data = data.map((elem) => {
    if (elem.id == idx) {
      elem.img = inpEditImg.value
      elem.name = inpEditName.value
      elem.course = selEditCourse.value
      elem.phone = inpEditPhone.value
      elem.isComplete = selEditStatus.value == "Active" ? true : false
    }
    return elem
  })
  get(data)
  dialogEdit.close()
  dialogAll.close()
}


/////// Search
inpSearch.oninput = () => {
  let data2 = data.filter((elem) => {
    if (elem.name.toLowerCase().trim().includes(inpSearch.value.toLowerCase().trim())) {
      return elem
    }
  })
  get(data2) 
}

/// Dark-mode
btnDark.onclick = () => {
  body.style.backgroundColor = "black"
  body.style.color = "white"
  divTitle.style.backgroundColor = "gray"
  divTitle.style.color = "white"
  selStatus.style.backgroundColor = "black"
  selStatus.style.color = "white"
  selCourse.style.backgroundColor = "black"
  selCourse.style.color = "white"
  inpSearch.style.backgroundColor = "black"
  inpSearch.style.color = "white"
  dialogAdd.style.backgroundColor = "black"
  dialogAdd.style.color = "white"
  dialogEdit.style.backgroundColor = "black"
  dialogEdit.style.color = "white"
  dialogInfo.style.backgroundColor = "black"
  dialogInfo.style.color = "white"
  dialogDelete.style.backgroundColor = "black"
  dialogDelete.style.color = "white"
  btnInfoDialog.style.backgroundColor = "black"
  btnInfoDialog.style.color = "white"
  btnInfoDialog.classList.add("btnInfoDialogDark")
  btnDeleteDialog.style.backgroundColor = "black"
  btnDeleteDialog.style.color = "white"
  btnEditDialog.classList.add("btnEditDialogDark")
  btnEditDialog.style.backgroundColor = "black"
  btnEditDialog.style.color = "white"
  btnDeleteDialog.classList.add("btnDeleteDialogDark")
  inpAddImg.style.backgroundColor = "black"
  inpAddImg.style.color = "white"
  inpAddName.style.backgroundColor = "black"
  inpAddName.style.color = "white"
  inpAddPhone.style.backgroundColor = "black"
  inpAddPhone.style.color = "white"
  selAddCourse.style.backgroundColor = "black"
  selAddCourse.style.color = "white"
  selAddStatus.style.backgroundColor = "black"
  selAddStatus.style.color = "white"
  inpEditImg.style.backgroundColor = "black"
  inpEditImg.style.color = "white"
  inpEditName.style.backgroundColor = "black"
  inpEditName.style.color = "white"
  inpEditPhone.style.backgroundColor = "black"
  inpEditPhone.style.color = "white"
  selEditCourse.style.backgroundColor = "black"
  selEditCourse.style.color = "white"
  selEditStatus.style.backgroundColor = "black"
  selEditStatus.style.color = "white"
}

///   light-mode
btnLaight.onclick = () => {
  body.style.backgroundColor = "white"
  body.style.color = "black"
  divTitle.style.backgroundColor = "rgb(233, 230, 230)"
  divTitle.style.color = "black"
  selStatus.style.backgroundColor = "white"
  selStatus.style.color = "black"
  selCourse.style.backgroundColor = "white"
  selCourse.style.color = "black"
  inpSearch.style.backgroundColor = "white"
  inpSearch.style.color = "black"
  dialogAdd.style.backgroundColor = "white"
  dialogAdd.style.color = "black"
  dialogEdit.style.backgroundColor = "white"
  dialogEdit.style.color = "black"
  dialogInfo.style.backgroundColor = "white"
  dialogInfo.style.color = "black"
  dialogDelete.style.backgroundColor = "white"
  dialogDelete.style.color = "black"
  btnInfoDialog.style.backgroundColor = "white"
  btnInfoDialog.style.color = "black"
  btnInfoDialog.classList.add("btnInfoDialogDark")
  btnDeleteDialog.style.backgroundColor = "white"
  btnDeleteDialog.style.color = "black"
  btnEditDialog.classList.add("btnEditDialogDark")
  btnEditDialog.style.backgroundColor = "white"
  btnEditDialog.style.color = "black"
  btnDeleteDialog.classList.add("btnDeleteDialogDark")
  inpAddImg.style.backgroundColor = "white"
  inpAddImg.style.color = "black"
  inpAddName.style.backgroundColor = "white"
  inpAddName.style.color = "black"
  inpAddPhone.style.backgroundColor = "white"
  inpAddPhone.style.color = "black"
  selAddCourse.style.backgroundColor = "white"
  selAddCourse.style.color = "black"
  selAddStatus.style.backgroundColor = "white"
  selAddStatus.style.color = "black"
  inpEditImg.style.backgroundColor = "white"
  inpEditImg.style.color = "black"
  inpEditName.style.backgroundColor = "white"
  inpEditName.style.color = "black"
  inpEditPhone.style.backgroundColor = "white"
  inpEditPhone.style.color = "black"
  selEditCourse.style.backgroundColor = "white"
  selEditCourse.style.color = "black"
  selEditStatus.style.backgroundColor = "white"
  selEditStatus.style.color = "black"
}

///Sort
// data = data.sort((a,b) => {
//   let n1 = a.name.toLowerCase()
//   let n2 = b.name.toLowerCase()
//   if (n1 < n2) {
//     return -1
//   }
//   if (n1 > n2) {
//     return 1
//   }
//   return 0
// })



//// GET
function get(data) {
  table.innerHTML = "";
  /// Status
  data.filter((el) => {
    if(selStatus.value == "Active") return el.isComplete == true
    else if(selStatus.value == "Inactive") return el.isComplete == false
    else return el
  })
  /// Course
  data.filter((elem) => {
    if(selCourse.value == "Js") return elem.course == "Java script"
    else if(selCourse.value == "Jsx") return elem.course == "React"
    else return elem
  })
  ///get
  data.forEach((elem) => {
    let tr = document.createElement("tr");
    tr.classList.add("tr");

    let tdName = document.createElement("td");
    let name = document.createElement("h1");
    name.innerHTML = elem.name;
    name.classList.add("name");
    let img = document.createElement("img");
    img.src = elem.img;
    img.classList.add("img");
    tdName.classList.add("tdName");
    tdName.append(img, name);

    let tdCourse = document.createElement("td");
    tdCourse.innerHTML = elem.course;
    tdCourse.classList.add("tdCourse");

    let tdStatus = document.createElement("td");
    tdStatus.classList.add("tdStatus");
    let nameStatus = document.createElement("h3");
    tdStatus.appendChild(nameStatus);
    if (elem.isComplete == true) {
      nameStatus.innerHTML = "Active";
      nameStatus.classList.add("statusActive");
    }
    if (elem.isComplete == false) {
      nameStatus.innerHTML = "Inactive";
      nameStatus.classList.add("statusInactive");
    }

    let tdPhone = document.createElement("td");
    tdPhone.innerHTML = elem.phone;
    tdPhone.classList.add("tdPhone");

    let tdAction = document.createElement("td");
    let nameAction = document.createElement("h1");
    nameAction.innerHTML = "...";
    nameAction.classList.add("nameAction");
    tdAction.classList.add("tdAction");
    tdAction.appendChild(nameAction);
    nameAction.onclick = () => {
      dialogAll.showModal()
      btnDeleteDialog.onclick = () => {
        deleteUser(elem.id)
      }
      btnInfoDialog.onclick = () => {
        InfoUser(elem.id)
      }
      btnEditDialog.onclick = () => {
        EditUser(elem.id)
      }
    }

    
    tr.append(tdName, tdCourse, tdStatus, tdPhone, tdAction);
    table.appendChild(tr);
  });
}
get(data);

