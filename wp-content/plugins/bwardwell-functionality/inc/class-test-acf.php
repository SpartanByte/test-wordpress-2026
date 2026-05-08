<?php
/**
 * Custom Feature Bundled in Theme
 * Structured using the Singleton Pattern
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( 'Test_ACF' ) ) {

    class Test_ACF {

        private static $instance = null;

        private function __construct() {
            $this->init_hooks();
        }

        public static function get_instance() {
            if ( self::$instance === null ) {
                self::$instance = new self();
            }
            return self::$instance;
        }

        /**
         * Centralized Hook Management
         */
        private function init_hooks() {
            // Register CPTs
            add_action( 'init', [ $this, 'custom_resources_cpt' ] );
            
            // Enqueue scripts/styles
            add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_assets' ] );
        }

        public function enqueue_assets() {
            // wp_enqueue_style( 'custom-resource-style', plugin_dir_url(__FILE__) . 'css/style.css' );
        }

        /**
         * Register the 'Custom Resource' Post Type
         */
        public function custom_resources_cpt() {
            $labels = [
                'name'               => 'Custom Resources',
                'singular_name'      => 'Custom Resource',
                'add_new'            => 'Add New',
                'add_new_item'       => 'Add New Resource',
                'edit_item'          => 'Edit Resource',
                'all_items'          => 'All Resources',
                'search_items'       => 'Search Resources',
                'not_found'          => 'No resources found.',
            ];

            $args = [
                'labels'             => $labels,
                'public'             => true,
                'has_archive'        => true,
                'show_in_menu'       => true,
                'rewrite'            => [ 'slug' => 'resources' ], // Cleaner URL slug
                'menu_icon'          => 'dashicons-media-document', 
                'supports' => [ 'title', 'editor', 'thumbnail', 'page-attributes' ], // Add page-attributes for menu order
                'show_in_rest'       => true, // Essential for Gutenberg
            ];

            // Using a prefix (btw_) avoids conflicts with other plugins
            register_post_type( 'btw_resource', $args );
        }
    }
}

// Initialize the class
Test_ACF::get_instance();