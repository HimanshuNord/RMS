
export const Accsetbtn = (Wrap, Div) => {
  let selchild;
  let wrap = document.getElementsByClassName(Wrap)[0]; // Get the first element with the class name
  if (Div === "prof") { selchild = 1; }
  else if (Div === "cont") { selchild = 2; }
  else if (Div === "sub") { selchild = 3; }
  else if (Div === "veri") { selchild = 4; }
  else if (Div === "chpass") { selchild = 4; }
  
  let children = wrap.children; // Access children of the 'wrap' element
  for (let i = 0; i < children.length; i++) {
    children[i].classList.remove("act");
    children[i].classList.remove("foc");
  }

  children[selchild].classList.add("act");
  children[selchild].classList.add("foc");
};
export const swapbtn = (Wrap, Div) => {
  let selchild;
  let wrap = document.getElementsByClassName(Wrap)[0]; // Get the first element with the class name
  let newsroomForm = document.querySelector(".newsroomlog");
  let employeeForm = document.querySelector(".emplpyeelog")

  if (Div === "employee") { 
    selchild = 0;
    employeeForm.classList.add("show");
    employeeForm.classList.remove("hide");
    newsroomForm.classList.add("hide");
    newsroomForm.classList.remove("show");
  } else if (Div === "newsroom") { 
    selchild = 1;
    employeeForm.classList.add("hide");
    employeeForm.classList.remove("show");
    newsroomForm.classList.add("show");
    newsroomForm.classList.remove("hide");
  }
  
  let children = wrap.children; // Access children of the 'wrap' element
  for (let i = 0; i < children.length; i++) {
    children[i].classList.remove("active");
    children[i].classList.remove("focus");
  }

  children[selchild].classList.add("active");
  children[selchild].classList.add("focus");
};

export const Swapform = (Wrap , Div) => {
  let selchild;
  let wrap = document.getElementsByClassName(Wrap)[0]; // Get the first element with the class name
  if (Div === "profform") { selchild = 0; }
  else if (Div === "contform") { selchild = 1; }
  else if (Div === "subform") { selchild = 2; }
  else if (Div === "veriform") { selchild = 3; }
  else if (Div === "chpassform") { selchild = 4; }
  
  let children = wrap.children; // Access children of the 'wrap' element
  for (let i = 0; i < children.length; i++) {
    children[i].classList.remove("show");
    children[i].classList.add("hide");
  }

  children[selchild].classList.add("show");
  children[selchild].classList.remove("hide");
}

export const Regbtn = (Wrap, Div) => {
  let selchild;
  let wrap = document.getElementsByClassName(Wrap)[0]; // Get the first element with the class name
  let newsroomForm = document.querySelector(".newsroomreg");
  let employeeForm = document.querySelector(".employeereg");
  let n = document.querySelectorAll(".new");
  if (Div === "employee") { 
    selchild = 0;
    employeeForm.classList.add("show");
    employeeForm.classList.remove("hide");
    newsroomForm.classList.add("hide");
    newsroomForm.classList.remove("show");
    n[0].classList.remove("newHeight")
    n[1].classList.remove("newHeight")
    n[2].classList.remove("newHeight")
    
  } else if (Div === "newsroom") { 
    selchild = 1;
    employeeForm.classList.add("hide");
    employeeForm.classList.remove("show");
    newsroomForm.classList.add("show");
    newsroomForm.classList.remove("hide");
    n[0].classList.add("newHeight")
    n[1].classList.add("newHeight")
    n[2].classList.add("newHeight")
  }
  
  let children = wrap.children; // Access children of the 'wrap' element
  for (let i = 0; i < children.length; i++) {
    children[i].classList.remove("active");
    children[i].classList.remove("focus");
  }

  children[selchild].classList.add("active");
  children[selchild].classList.add("focus");
};
