<div class="property-block">
 <h4><slot name="title"></slot></h4>
 <p><slot name="info"></slot></p>
</div>

<style>
  .property-block {
    margin-top: 0.3em;
    margin-bottom: 0.9em;
    line-height: 1.5;
    display: block;
  }

  h4 {
    margin: 0;
    display: inline;
    font-weight: bold;
    font-style: italic;
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