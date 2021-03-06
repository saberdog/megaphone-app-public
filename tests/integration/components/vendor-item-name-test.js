import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('vendor-item-name', 'Integration | Component | vendor item name', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{vendor-item-name}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#vendor-item-name}}
      template block text
    {{/vendor-item-name}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
