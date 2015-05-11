var Gaffa = require('gaffa'),
    crel = require('crel'),
    doc = require('doc-js'),
    setify = require('setify');

function FormElement(){}
FormElement = Gaffa.createSpec(FormElement, Gaffa.View);
FormElement.prototype._type = 'formElement';

FormElement.prototype.render = function(){
    var view = this,
        renderedElement = this.renderedElement = this.renderedElement || crel('input'),
        formElement = this.formElement = this.formElement || renderedElement;

    doc.on(this.updateEventName || "change", formElement, function(){
        view.value.set(formElement.value);
        view.valid.set(formElement.validity.valid);
    });
};

FormElement.prototype.value = new Gaffa.Property(function(view, value){
    value = value || '';

    setify(view.formElement, value);

    view.valid.set(element.validity.valid);
});

FormElement.prototype.type = new Gaffa.Property(function(view, value){
    view.formElement.setAttribute('type', value != null ? value : "");
});

FormElement.prototype.placeholder = new Gaffa.Property(function(view, value){
    view.formElement.setAttribute('placeholder', value != null ? value : "");
});

FormElement.prototype.required = new Gaffa.Property(function(view, value){
    if (value){
        view.formElement.setAttribute('required', 'required');
    }else{
        view.formElement.removeAttribute('required');
    }
});

FormElement.prototype.valid = new Gaffa.Property();
FormElement.prototype.validity = new Gaffa.Property(function(view, value){
    value = value || '';

    view.formElement.setCustomValidity(value);
});
FormElement.prototype.enabled = new Gaffa.Property({
    update: function(view, value){
        view.formElement[value ? 'removeAttribute' : 'setAttribute']('disabled','disabled');
    },
    value: true
});

module.exports = FormElement;