<div class="property-line">
 <h4><slot name="prop">Armor Class</slot></h4>
 <p><slot name="val">18 (natural armor)</slot></p>
 <slot></slot>
</div>

<style>
 .property-line {
  line-height: 1.4;
    display: block;
    text-indent: -1em;
    padding-left: 1em;
 }
  h4 {
    margin: 0;
    display: inline;
    font-weight: bold;
  }

  p:first-of-type {
    display: inline;
    text-indent: 0;
  }

  p {
    text-indent: 1em;
    margin: 0;
  }
</style>