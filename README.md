# gaffa-formelement

formelement abstract view for gaffa

This view should not be used directly, but instead should be inherited be other views.

## Install:

    npm i gaffa-formelement

## Usage

An inheriting view should override any neccisary property.

It is likely that an inheriting view will override the .render method.

the default FormElements rendere method will use whatever .renderedElement and .formElement for binding change events if they are already present by the time it is called.

# API

## Properties (instanceof Gaffa.Property)

### value (get and set)

    The 'view.formElement's value.

    when the formElement triggers a change event, it will set the elements value into this binding.

    The event which causes the element to set the value can be overriden by assigning an event name to 'updateEventName':

        formelement.updateEventName = 'keyup';

### type (get)

    The 'view.formElement's type attribute.

### placeholder (get)

    The 'view.formElement's placeholder attribute.

### required (get)

    The 'view.formElement's required attribute.

    The value recieved is truthy checked, and either sets the required attribute to required, or removes the required attribute.

### validity (get)

    calls setCustomValidity on the 'view.formElement'.

    This affects the elements .validity state.

    undefined/null/empty string is equivilent to valid. Anything else is invalid.