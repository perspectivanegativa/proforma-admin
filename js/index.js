// Acá ponemos el código custom de javascript

$(document).ready(function() {
  $('#dataTable').DataTable(
    {
      "fixedHeader": true,
      "language": {
        "search": "Filtrar resultados:",
        "lengthMenu": "Mostrando _MENU_  Registros por pagina",
        "zeroRecords": "Sin resultados - sorry",
        "info": "Mostrando pagina _PAGE_ de _PAGES_",
        "infoEmpty": "No hay registros disponibles",
        "infoFiltered": "(filtrados de _MAX_ registros totales)"
      }
    }
  );
});
