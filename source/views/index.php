<?php include 'includes/head.inc' ?>

  <body class="p-spec p-spec--overview t-class--rogue">
    <a href="#main" class="u-skip-to-content">Skip to content</a>
    <div class="u-site-wrapper">
      
      <?php include 'includes/header.inc' ?>

      <main role="main" class="l-main" id="main">
        
        <?php include 'includes/navigation-category.inc' ?>

        <div class="u-wrapper">

          <?php include 'includes/navigation-spec.inc' ?>

          <section class="c-section c-section--content c-overview">
            <?php include 'content/overview.php' ?>
          </section><!-- /.c-section -->

          <section class="c-section c-section--content c-stats">
            <?php include 'content/stats.php' ?>
          </section><!-- /.c-section -->

        </div><!-- /.u-wrapper -->
      </main><!-- /.l-main -->

      <?php include 'includes/footer.inc' ?>

    </div><!-- /.u-site-wrapper -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>')</script>
    <script src="scripts/main.js"></script>
  </body><!-- /.p-spec -->
</html>
