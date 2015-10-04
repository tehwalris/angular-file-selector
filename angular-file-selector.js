angular.module('tehwalris.file-selector', [])
.directive('fileSelector', function () {
  return {
      restrict: 'A',
      transclude: true,
      scope: {
        onSelect: '&?',
        file: '=?',
        accept: '@?'
      },
      link: {post: linkFunc},
      template: '<input style="display:none;" type="file" accept="{{accept}}" /><div ng-transclude></div>'
  };

  function linkFunc(scope, element) {
    var fileInput = element.find('input')[0];
    element.bind('click', function () { 
      fileInput.focus();
      fileInput.click();
    });
    element.bind('change', function (event) {
      var file = event.target.files[0];
      scope.onSelect({file: file});
      scope.file = file;
      scope.$apply(); //May not update file immediately otherwise
    });
  }
});
