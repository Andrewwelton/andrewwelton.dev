module Main exposing (Model, Msg(..), init, main, sideBar, subscriptions, update, view, viewLink)

import Browser
import Browser.Navigation as Nav
import Html exposing (..)
import Html.Attributes exposing (..)
import Url



-- MAIN


main : Program () Model Msg
main =
    Browser.application
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        , onUrlChange = UrlChanged
        , onUrlRequest = LinkClicked
        }



-- MODEL


type alias Model =
    { key : Nav.Key
    , url : Url.Url
    }


init : () -> Url.Url -> Nav.Key -> ( Model, Cmd Msg )
init flags url key =
    ( Model key url, Cmd.none )



-- UPDATE


type Msg
    = LinkClicked Browser.UrlRequest
    | UrlChanged Url.Url


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        LinkClicked urlRequest ->
            case urlRequest of
                Browser.Internal url ->
                    ( model, Nav.pushUrl model.key (Url.toString url) )

                Browser.External href ->
                    ( model, Nav.load href )

        UrlChanged url ->
            ( { model | url = url }
            , Cmd.none
            )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none



-- VIEW


view : Model -> Browser.Document Msg
view model =
    { title = "andrewwelton.dev"
    , body =
        [ section [ class "section" ]
            [ div [ class "container" ]
                [ div [ class "columns" ]
                    [ div [ class "column is-one-quarter" ]
                        [ sideBar [] ]
                    , div [ class "column" ]
                        [ case model.url.path of
                            "/" ->
                                home []

                            "/index.html" ->
                                home []

                            _ ->
                                text (String.append "How did you get here " model.url.path)
                        ]
                    ]
                ]
            ]
        ]
    }


home : List String -> Html msg
home _ =
    div []
        [ h1 [ class "title" ] [ text "Andrew Welton" ]
        , h2 [ class "subtitle" ] [ text "Software Developer" ]
        ]


sideBar : List String -> Html msg
sideBar _ =
    aside [ class "menu" ]
        [ p [ class "menu-label" ] [ text "andrewwelton.dev" ]
        , ul [ class "menu-list" ]
            [ li [] [ a [ href "/" ] [ text "Home" ] ]
            , li [] [ a [ href "/work" ] [ text "Work" ] ]
            ]
        ]


viewLink : String -> Html msg
viewLink path =
    li [] [ a [ href path ] [ text path ] ]
