$ ->
    $keys = $ '#keys'
    $keycode = $ '#keycode'
    $charcode = $ '#charcode'
    
    modifierLabels =
        'shift': '⇧'
        'ctrl': 'ctrl'
        'alt': '⌥'
    
    modifierKeyCodes = [16,17,18]
    
    $(window).bind 'keypress', (e) ->
        $charcode.text e.charCode
    
    $(window).bind 'keydown', (e) ->
        $keycode.text e.keyCode
        
        $keys.html ''
        
        for modifier in ['shift', 'alt', 'ctrl']
            do (modifier) ->
                if e["#{modifier}Key"]
                    $key = $ """<span class="key modifier #{modifier}">#{modifierLabels[modifier]}</span>"""
                    $keys.append $key
                
        if e.keyCode not in modifierKeyCodes
            key = String.fromCharCode(e.keyCode).toUpperCase()
            $key = $ """<span class="key">#{key}</span>"""
            $keys.append $key
