define (
  'controller',
  ['model', 'view'],
  function (model, view) {
    function Controller (model, view) {
        var self = this;
        // $('.item-add').bind('click', addItem);
        view.elements.addBtn.on('click', addItem);
        // $('.item-delete').bind('click', removeItem);
        view.elements.listContainer.on('click', '.item-delete', removeItem);
        // $('.display').bind('click', letEdit);
        // $('.edit').bind('focusout', changeLi);
        view.elements.listContainer.on('click', '.display', letEdit);
        view.elements.listContainer.on('focusout', '.edit', changeLi);

        function addItem () {
          var newItem = view.elements.input.val();
          model.addItem(newItem);
          view.renderList(model.data);
          view.elements.input.val('');
        }

        function removeItem () {
          var item = $(this).attr('data-value');
          model.removeItem(item);
          view.renderList(model.data);
        }

        function letEdit () {
            $(this).hide().siblings('.edit').show().val($(this).text()).focus();
        }

        function changeLi () {
          var index = $(this).parent().index();
          $(this).hide().siblings('.display').show().text($(this).val());
          var newItem = $(this).val();
          model.data.splice (index, 1, newItem);
          return model.data;
        }
      }
    return new Controller (model, view);
  }
);
