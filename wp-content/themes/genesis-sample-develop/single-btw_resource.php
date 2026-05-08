<?php
	/**
	 * Template Name: Resource Detail
	 * Template Post Type: btw_resource, page
	 */
	add_action( 'genesis_entry_content', 'my_custom_resources_content' );

	// // Removes site header elements.
	// remove_action( 'genesis_header', 'genesis_header_markup_open', 5 );
	// remove_action( 'genesis_header', 'genesis_do_header' );
	// remove_action( 'genesis_header', 'genesis_header_markup_close', 15 );

	// // Removes navigation.
	// remove_theme_support( 'genesis-menus' );

	// // Removes site footer elements.
	// remove_action( 'genesis_footer', 'genesis_footer_markup_open', 5 );
	// remove_action( 'genesis_footer', 'genesis_do_footer' );
	// remove_action( 'genesis_footer', 'genesis_footer_markup_close', 15 );

	// // Removes Skip Links.
	// remove_action( 'genesis_before_header', 'genesis_skip_links', 5 );

	// add_action( 'wp_enqueue_scripts', 'genesis_sample_dequeue_skip_links' );
	// /**
	//  * Dequeues Skip Links Script.
	//  *
	//  * @since 1.0.0
	//  */
	// function genesis_sample_dequeue_skip_links() {

	// 	wp_dequeue_script( 'skip-links' );

	// }

	get_header();
	function my_custom_resources_content() {
		echo '<h1>Resources Page</h1>';
		echo '<p>This is a custom page template for resources.</p>';
	}

	?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">
			<header class="page-header">
				<?php echo get_field("resource_title"); ?>
			</header><!-- .page-header -->
			<div class="page-content">
				<?php echo get_field("resource_description"); ?>	
			</div><!-- .page-content -->
			<!-- TODO:Add a button that links to the resource URL -->
				<?php
					// $resource_link = get_field("resource_link");
					// if ( $resource_link ) {
					// 	echo '<a href="' . esc_url( $resource_link ) . '" class="button" target="_blank">View Resource</a>';
					// }
				?>	
			<!-- Repeatable field for additional resources -->
			<?php /*
			<?php if ( have_rows( 'additional_resources' ) ) : ?>
				<h2>Additional Resources</h2>
				<ul>
					<?php while ( have_rows( 'additional_resources' ) ) : the_row();
						$additional_title = get_sub_field( 'additional_title' );
						$additional_link = get_sub_field( 'additional_link' );
						?>
						<li>
							<?php if ( $additional_link ) : ?>
								<a href="<?php echo esc_url( $additional_link ); ?>" target="_blank"><?php echo esc_html( $additional_title ); ?></a>
							<?php else : ?>
								<?php echo esc_html( $additional_title ); ?>
							<?php endif; ?>
						</li>
					<?php endwhile; ?>
				</ul>
			<?php endif; ?>
			*/ ?>
		</main><!-- #main -->
	</div><!-- #primary -->
<?php
// get_footer();

genesis(); // Runs the Genesis framework
