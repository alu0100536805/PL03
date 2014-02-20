var assert = chai.assert;

suite('Resultados de los tests:', function() {
    test('Detecta un header', function() {
        var tokens = lexer('[HOLA]');
assert.equal(tokens[0].type,'header');
    });
    test('Detecta un blanco', function() {
        var tokens = lexer(' ');
assert.equal(tokens[0].type,'blanks');
    });
    test('Detecta un Comentario', function() {
        var tokens = lexer('; Aqui un ejempl de comentario ');
assert.equal(tokens[0].type,'comments');
    });
    test('Detecta una asignacion', function() {
        var tokens = lexer('Edad = 33');
assert.equal(tokens[0].type,'nameEqualValue');
    });



});
