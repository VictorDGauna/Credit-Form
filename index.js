// TINY EDITOR SCRIPT
tinymce.init({
  selector: '#referred',
  branding:false,
  menubar:false,
  statusbar: false,
  toolbar:
    "forecolor | bold | italic |underline| media | image | emoticons | fullscreen",
  plugins: "image, emoticons, media , fullscreen, autoresize",
  height: 200,
  
});
//  const formulario = document.getElementById('formulario');
//  formulario.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const contenido = tinymce.activeEditor.getContent({format:'text'});
//   console.log(contenido);
//  })
