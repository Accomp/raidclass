<?php include 'includes/head.inc' ?>

  <body class="p-guide t-class--rogue">
    <a href="#main" class="u-skip-to-content">Skip to content</a>
    <div class="u-site-wrapper">
      
      <?php include 'includes/header.inc' ?>

      <main role="main" class="l-main" id="main">
        
        <?php include 'includes/navigation-category.inc' ?>

        <div class="u-wrapper">

          <?php include 'includes/navigation-section.inc' ?>

          <?php include 'content/overview.php' ?>
          <?php include 'content/stats.php' ?>

        </div><!-- /.u-wrapper -->
      </main><!-- /.l-main -->

      <?php include 'includes/footer.inc' ?>

    </div><!-- /.u-site-wrapper -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>')</script>
    <script src="scripts/main.js"></script>
  </body><!-- /.p-guide -->
</html>
