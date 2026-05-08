<?php
	/**
	 * Template Name: Resource Detail
	 * Template Post Type: btw_resource, page
	 */
	// add_action( 'genesis_before_content', 'my_custom_stuff', 15 );
	add_action( 'genesis_entry_content', 'my_custom_resources_content' );

	get_header();
	function my_custom_resources_content() {
		echo '<h1>Resources Page</h1>';
		echo '<p>This is a custom page template for resources.</p>';
	}

	?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

			<section class="error-404 not-found">
				<header class="page-header">
					<h1 class="page-title">Resource Detail Template</h1>ß
				</header><!-- .page-header -->
				<div class="page-content">
					
				</div><!-- .page-content -->
			</section><!-- .error-404 -->

		</main><!-- #main -->
	</div><!-- #primary -->
<?php
get_footer();

genesis(); // Runs the Genesis framework
