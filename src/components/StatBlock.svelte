<script>

</script>

<div class="stat-block">
 <slot></slot>
</div>

<style lang="scss">
.stat-block {
 width:430px;
 font-family: 'Noto Sans', 'Myriad Pro', Calibri, Helvetica, Arial,
                  sans-serif;
    font-size: 13.5px;
    background: #FDF1DC;
    padding: 0.6em;
    padding-bottom: 0.5em;
    border: 1px #DDD solid;
    box-shadow: 0 0 1.5em #867453;
     /* We don't want the box-shadow in front of the bar divs. */
    position: relative;
    z-index: 0;

    /* Leaving room for the two bars to protrude outwards */
    margin-left: 2px;
    margin-right: 2px;
}
:global(h3) {
    border-bottom: 1px solid #7A200D;
    color: #7A200D;
    font-size: 21px;
    font-variant: small-caps;
    font-weight: normal;
    letter-spacing: 1px;
    margin: 0;
    margin-bottom: 0.3em;

    break-inside: avoid-column;
    break-after: avoid-column;
    }
 :global(p){
  margin-top: 0.3em;
  margin-bottom: 0.9em;
  line-height: 1.5;
 }
    *:last-child {
     margin-bottom:0;
    }
</style>