macro define {
    rule { $x } => {
        var $x
    }

    rule { $x = $expr } => {
        var $x = $expr
    }
}