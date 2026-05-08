<?php
/**
 * @package Brian Wardwell Functionality
 * @version 1.0.0
 */             
/*
Plugin Name: Brian Wardwell Functionality
Plugin URI: http://wordpress.org/plugins/bwardwell-functionality/
Description: A custom functionality plugin for Brian Wardwell's website.
Author: Brian Wardwell
Version: 1.0.0
Author URI: http://brianwardwell.com/
Text Domain: bwardwell-functionality
*/
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

require_once plugin_dir_path( __FILE__ ) . 'inc/class-test-acf.php';
require_once plugin_dir_path( __FILE__ ) . 'inc/class-bwardwell-theme-options.php';