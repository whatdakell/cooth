<?php
// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) exit;

// BEGIN ENQUEUE PARENT ACTION
// AUTO GENERATED - Do not modify or remove comment markers above or below:

if ( !function_exists( 'chld_thm_cfg_locale_css' ) ):
    function chld_thm_cfg_locale_css( $uri ){
        if ( empty( $uri ) && is_rtl() && file_exists( get_template_directory() . '/rtl.css' ) )
            $uri = get_template_directory_uri() . '/rtl.css';
        return $uri;
    }
endif;
add_filter( 'locale_stylesheet_uri', 'chld_thm_cfg_locale_css' );

// function dequeue_elementor_global__css() {
//   wp_dequeue_style('elementor-global');
//   wp_deregister_style('elementor-global');
// }
// add_action('wp_print_styles', 'dequeue_elementor_global__css', 9999);

function unhook_parent_style() {

	wp_dequeue_style( 'hello-elementor-theme-style' );
	wp_deregister_style( 'hello-elementor-theme-style' );
	wp_dequeue_style( 'hello-elementor' );
	wp_deregister_style( 'hello-elementor' );
}
add_action( 'wp_enqueue_scripts', 'unhook_parent_style', 20 );


if ( !function_exists( 'child_theme_configurator_css' ) ):
    function child_theme_configurator_css() {
        wp_enqueue_style( 'chld_thm_cfg_separate', trailingslashit( get_stylesheet_directory_uri() ) . 'style.css' );
    }
endif;

add_action( 'wp_enqueue_scripts', 'child_theme_configurator_css', 100 );

function scripts_and_styles()
{
    wp_register_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js');
    wp_enqueue_script('jquery');
    wp_register_script('owl-carousel', 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js');
    wp_enqueue_script('owl-carousel');
		wp_enqueue_style( 'animate-css', 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' );
		wp_enqueue_style( 'style', get_stylesheet_uri() );
		
    wp_register_script('e-custom', get_stylesheet_directory_uri() . '/e-custom.js', false,'1.2');
    wp_enqueue_script('e-custom');
}

add_action('wp_enqueue_scripts', 'scripts_and_styles');

add_filter( 'hello_elementor_page_title', '__return_false' );


defined( 'CHLD_THM_CFG_IGNORE_PARENT' ) or define( 'CHLD_THM_CFG_IGNORE_PARENT', TRUE );

// END ENQUEUE PARENT ACTION
