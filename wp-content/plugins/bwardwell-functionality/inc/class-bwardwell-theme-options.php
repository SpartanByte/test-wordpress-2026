<?php
/**
 * Custom Feature Bundled in Theme
 * Structured using the Singleton Pattern
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( 'Custom_Theme_Options' ) ) {

    class Custom_Theme_Options   {

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
            // Register theme settings menu item
            add_action( 'admin_init', [ $this, 'bwardwell_theme_settings_init' ] );
            add_action( 'admin_menu', [ $this, 'bwardwell_theme_settings_menu_item' ] );
        }

        /**
         * Define and load the theme settings page
         */
        /* Include the theme settings in the admin menu */
        public function bwardwell_theme_settings_menu_item() {
            // add_menu_page( 'BWardwell Settings', 'BWardwell Settings', 'manage_options', 'bwardwell-theme-settings', 'bwardwell_theme_settings_page', 'dashicons-admin-generic', 3 );
            add_menu_page( 
                'BWardwell Settings', 
                'BWardwell Settings', 
                'manage_options', 
                'bwardwell-theme-settings', 
                [ $this, 'bwardwell_theme_settings_page' ], // OOP callback
                'dashicons-admin-generic', 
                3 
            );
        }

        public function bwardwell_theme_settings_init() {
            register_setting( 'bwardwell_theme_settings', 'bwardwell_theme_settings_options' );

            add_settings_section(
                'bwardwell_theme_settings_main_section',
                'Main Settings',
                [ $this, 'bwardwell_theme_settings_main_section_callback' ], 
                'bwardwell_theme_settings'
            );

            add_settings_field(
                'bwardwell_theme_settings_logo',
                'Logo',
                [ $this, 'bwardwell_theme_settings_logo_callback' ], 
                'bwardwell_theme_settings',
                'bwardwell_theme_settings_main_section'
            );

            add_settings_field(
                'bwardwell_theme_settings_phone_number',
                'Phone Number',
                [ $this, 'bwardwell_theme_settings_phone_number_callback' ],
                'bwardwell_theme_settings',
                'bwardwell_theme_settings_main_section'
            );

            add_settings_section(
                'bwardwell_theme_settings_appearance_section',
                'Appearance Settings',
                [ $this, 'bwardwell_theme_settings_appearance_section_callback' ], 
                'bwardwell_theme_settings'
            );

            // Add Accent Color Field
            add_settings_field(
                'bwardwell_theme_settings_accent_color',
                'Accent Color Scheme',
                [ $this, 'bwardwell_theme_accent_color_callback' ],
                'bwardwell_theme_settings',
                'bwardwell_theme_settings_appearance_section'
            );
        }

        // Callback for sections first for clean code organization
        function bwardwell_theme_settings_main_section_callback() {
            echo '<p>Main settings for the bwardwell custom theme.</p>';
        }

        function bwardwell_theme_settings_appearance_section_callback() {
            echo '<p>Appearance settings for the bwardwell custom theme.</p>';
        }

        function bwardwell_theme_settings_social_media_section_callback() {
            echo '<p>Social media links for the bwardwell custom theme.</p>';
        }

        function bwardwell_theme_settings_logo_callback() {
            $options = get_option( 'bwardwell_theme_settings_options' );
            $logo = isset( $options['logo'] ) ? $options['logo'] : '';
            echo '<input type="file" name="bwardwell_theme_settings_options[logo]" value="' . esc_attr( $logo ) . '" />';
        }

        function bwardwell_theme_settings_phone_number_callback() {
            $options = get_option( 'bwardwell_theme_settings_options' );
            $phone_number = isset( $options['phone_number'] ) ? $options['phone_number'] : '';
            echo '<input type="number" name="bwardwell_theme_settings_options[phone_number]" value="' . esc_attr( $phone_number ) . '" />';
        }

        public function bwardwell_theme_accent_color_callback() {
            $options = get_option( 'bwardwell_theme_settings_options' );
            $current_color = isset( $options['accent_color'] ) ? $options['accent_color'] : 'blue';
            ?>
                <select name="bwardwell_theme_settings_options[accent_color]">
                    <option value="blue" <?php selected( $current_color, 'blue' ); ?>>Corporate Blue</option>
                    <option value="green" <?php selected( $current_color, 'green' ); ?>>Eco Green</option>
                    <option value="dark" <?php selected( $current_color, 'dark' ); ?>>Modern Dark</option>
                </select>
                <p class="description">This will change the color of buttons and links across the site.</p>
            <?php
        }

        // Render the theme settings page
        public function bwardwell_theme_settings_page() {
            ?>
                <div class="wrap">
                    <h1>BWardwell Settings</h1>
                    <form method="post" action="options.php">
                        <?php
                            do_settings_sections( 'bwardwell_theme_settings' );
                            settings_fields( 'bwardwell_theme_settings' );
                            submit_button();
                        ?>
                    </form>
                </div>
            <?php
        }
    }
}

// Initialize the class
Custom_Theme_Options::get_instance();